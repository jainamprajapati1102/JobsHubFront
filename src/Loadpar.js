import React from 'react'
import loadjs from 'loadjs'
const Loadpar = () => {
    return (
        loadjs.reset(),
        loadjs("assets/js/jquery.min.js", { async: true }),
        loadjs("assets/js/extra.js", { async: true }),
        loadjs("assets/plugins/bootstrap/js/bootstrap.min.js", { async: true }),
        loadjs("assets/plugins/bootstrap/js/bootsnav.js", { async: true }),
        loadjs("assets/js/viewportchecker.js", { async: true }),
        loadjs("assets/js/slick.js", { async: true }),
        loadjs("assets/plugins/bootstrap/js/wysihtml5-0.3.0.js", { async: true }),
        loadjs("assets/plugins/bootstrap/js/bootstrap-wysihtml5.js", { async: true }),
        loadjs("assets/plugins/aos-master/aos.js", { async: true }),
        loadjs("assets/plugins/nice-select/js/jquery.nice-select.min.js", { async: true }),
        loadjs("assets/js/custom.js", { async: true }),
        loadjs('assets/mycustom.js', { async: true })
    )
}
export default Loadpar
