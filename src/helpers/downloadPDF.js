import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {store} from "../app/store";

// resumeContainer
export default function handlePDFDownload(event) {
    const {firstName} = store.getState().personal
    const resumeDocument = document.getElementById("resumeContainer")
    if (resumeDocument) {
        html2canvas(resumeDocument)
            .then(canvas => {
                const imgData = canvas.toDataURL('image/png')
                const pdf = new jsPDF({unit: "cm", compress: true, orientation: 'p', precision: 100})
                pdf.addImage(imgData, "JPEG", 0, 0)
                return pdf.save(`${firstName}_resume.pdf`)
            })
    }
}
