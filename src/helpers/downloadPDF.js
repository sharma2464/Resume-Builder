import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import store from "../app/store";

// resumeContainer
export default async function handlePDFDownload(event) {
    const {firstName} = store.getState().personal
    const resumeDocument = document.getElementById("resumeContainer")
    if (resumeDocument) {
        await html2canvas(resumeDocument).then(canvas => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF()
            pdf.addImage(imgData, "JPEG", 8.5, 11)
            return pdf.save(`${firstName}_resume.pdf`)
        })
    }
}
