/* eslint-disable no-invalid-this*/
/* eslint-disable no-undef*/
// IMPORTS
const path = require("path");
const {create_browser, path_assignment, warn_errors, scored, checkFileExists} = require("./testutils");
const fs = require("fs");
const net = require('net');


const URL = `file://${path.resolve(path.join(path_assignment.replace("%", "%25"), "cv.html"))}`;

let browser = create_browser();


describe("Tests Práctica 2", function() {
    after(function () {
        warn_errors();
    });

    describe("Prechecks", function () {
	      scored(`Comprobando que existe la carpeta de la entrega: ${path_assignment}`,
               -1,
               async function () {
                   this.msg_err = `No se encontró la carpeta '${path_assignment}'`;
                   (await checkFileExists(path_assignment)).should.be.equal(true);
	             });

        scored(`Existe el fichero cv.html`, 1, async function () {
            let f = path.join(path_assignment, "cv.html");
            this.msg_err = `No existe el fichero ${f}`;
            (await checkFileExists(f)).should.equal(true);
            this.msg_err = "No se pudo abrir el CV en el navegador virtual.";
            await browser.visit(URL);
            browser.assert.status(200);
            (await checkFileExists(f)).should.equal(true);
        });

    });

    describe("Tests funcionales", function () {

        let checks = {
            "cv.html": {
                true: [/<body>/, /<\/body>/, /<header>/, /<\/header>/, /<footer>/, /<\/footer>/]
            },
            "cv.css": {
                true: [ /body/, /section/ ],
            },
        }

        scored(`Existen todos los elementos requeridos`, 1, async function () {
            for (fpath in checks) {
                let templ = fs.readFileSync(path.join(path_assignment, fpath), "utf8");
                for(status in checks[fpath]) {
                    elements = checks[fpath][status];
                    for(var elem in elements){
                        let e = elements[elem];
                        if (status) {
                            this.msg_err = `${fpath} no incluye ${e}`;
                        } else {
                            this.msg_err = `${fpath} incluye ${e}, pero debería haberse borrado`;
                        }
                        e.test(templ).should.be.equal((status == 'true'));
                    }
                }
            }
        });

        scored(`La página web incluye la hoja de estilos (CSS) cv.css`, 1, async function () {
		        browser.html('link[rel="stylesheet"][href="cv.css"]').should.not.be.empty;
        });

        scored(`Existe una cabecera`, 1, async function () {
		        content = browser.html("header");
        });

        scored(`La cabecera contiene una foto (foto.jpg)`, 1, async function () {
		        content = browser.html("header");
		        content.includes("img").should.be.equal(true);
            content.includes("foto.jpg").should.be.equal(true);
        });

        scored(`La cabecera contiene los datos personales pedidos`, 1, async function () {
		        content = browser.html("header");
            this.msg_err = "falta el nombre";
		        browser.html("header #nombre").should.not.be.empty;
            this.msg_err = "falta la fecha de nacimiento";
		        browser.html("header #fecha_nacimiento").should.not.be.empty;
        });
        

        scored(`Existe la sección de formación"`, 1, async function () {
		        browser.html("section#estudios").should.not.be.empty;
        });

        scored(`Existe la sección de datos laborales"`, 1, async function () {
		        browser.html("section#laboral").should.not.be.empty;
        });

        scored(`Existe la sección de datos adicionales, con un enlace a GitHub"`, 1, async function () {
		        let content = browser.html("section#otros");
            content.should.not.be.empty;
            content.includes("github.com").should.be.ok;
        });

        scored(`Existe un pie (footer) e incluye la fecha de actualización`, 1, async function () {
		        content = browser.html("footer");
		        content.includes("Actualizado el").should.be.equal(true);
        });

	  });
})

