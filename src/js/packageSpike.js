fluid.defaults("sjrk.packageSpike", {
    gradeNames: "fluid.viewComponent",
    selectors: {
        form: ".sjrkc-packageSpike-form",
        text: ".sjrkc-packageSpike-form-text",
        file: ".sjrkc-packageSpike-form-file",
        package: ".sjrkc-packageSpike-form-package"
    },
    invokers: {
        package: {
            funcName: "sjrk.packageSpike.package",
            args: ["{that}"]
        }
    },
    listeners: {
        "onCreate.bindPackageClick": {
            "this": "{that}.dom.package",
            "method": "click",
            "args": "{that}.package"
        }
    }
});

sjrk.packageSpike.package = function (that) {
    var formText = that.locate("text").val();

    var formFile = that.locate("file")[0].files[0];

    var zip = new JSZip();

    var manifest = {text: formText};

    manifest.fileInfo = {
        lastModified: formFile.lastModified,
        lastModifiedDate: formFile.lastModifiedDate,
        name: formFile.name,
        size: formFile.size,
        type: formFile.type
    };

    zip.file("manifest.json", JSON.stringify(manifest));

    zip.file(formFile.name, formFile);

    zip.generateAsync({type:"blob"})
    .then(function (blob) {
        saveAs(blob, "packaged.zip");
    });

};
