var exec = require('child_process').exec

function reportPython(reportPath) {

    return new Promise(function (resolve, reject) {

        exec("python /Users/sarthaksadh/Desktop/ey-hack/algo/ocr_surveyor.py " + reportPath, (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                reject(error);

            }

            datesJson = JSON.parse(stdout);
            if (datesJson.claimDate == '00-00-00') {
                resultJson['claimDate'] = {
                    value: datesJson.claimDate,
                    accuracy: 0
                }

            }
            else {
                resultJson['claimDate'] = {
                    value: datesJson.claimDate,
                    accuracy: 100
                }

            }
            if (datesJson.insuranceFrom == '00-00-00') {
                resultJson['insuranceFrom'] = {
                    value: datesJson.insuranceFrom,
                    accuracy: 0
                }

            }
            else {
                resultJson['insuranceFrom'] = {
                    value: datesJson.insuranceFrom,
                    accuracy: 100
                }

            }
            if (datesJson.insuranceTo == '00-00-00') {
                resultJson['insuranceTo'] = {
                    value: datesJson.insuranceTo,
                    accuracy: 0
                }
            }
            else {

                resultJson['insuranceTo'] = {
                    value: datesJson.insuranceTo,
                    accuracy: 100
                }


            }




            resolve(JSON.parse(stdout));


        });

    })




}


module.exports = {
    reportPython
}

