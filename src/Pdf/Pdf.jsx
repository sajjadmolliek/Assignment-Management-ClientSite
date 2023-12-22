// import React from 'react';

// const Pdf = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Pdf;



// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// const PDFPreview = ({ pdfLink }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button
//         onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
//         disabled={pageNumber <= 1}
//       >
//         Previous
//       </button>
//       <button
//         onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
//         disabled={pageNumber >= numPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default PDFPreview;









import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePDFUrlChange = (e) => {
    setPdfUrl(e.target.value);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">PDF Viewer</h2>
        <input
          type="text"
          placeholder="Enter PDF URL"
          className="w-full mb-2 p-2 border border-gray-300 rounded-lg"
          value={pdfUrl}
          onChange={handlePDFUrlChange}
        />
        <button
          onClick={() => setPdfUrl(pdfUrl)}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Load PDF
        </button>
        {pdfUrl && (
          <div className="mt-4">
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p className="mt-2">
              Page {pageNumber} of {numPages}
            </p>
            <div className="mt-2">
              <button
                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1}
                className="bg-blue-500 text-white p-2 rounded-lg mr-2"
              >
                Previous
              </button>
              <button
                onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
                disabled={pageNumber >= numPages}
                className="bg-blue-500 text-white p-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PDFViewer;












// import React, { useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { Document, Page } from 'react-pdf'; // Import react-pdf components

// const SubmittedAssignment = () => {
//   const submittedAssignments = useLoaderData(); // Assuming this is your assignment data

//   // State variables for PDF modal
//   const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
//   const [pdfLinkToPreview, setPdfLinkToPreview] = useState('');

//   // Function to open the PDF modal
//   const openPdfModal = (pdfLink) => {
//     setPdfLinkToPreview(pdfLink);
//     setIsPdfModalOpen(true);
//   };

//   // Function to close the PDF modal
//   const closePdfModal = () => {
//     setIsPdfModalOpen(false);
//     setPdfLinkToPreview('');
//   };

//   if (submittedAssignments.length > 0) {
//     return (
//       <div className="w-[85%] mx-auto my-20">
//         <div className="products-container items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-20">
//           {submittedAssignments?.map((assignment) => (
//             <div
//               key={assignment._id}
//               className="md:card md:flex-row md:w-[38rem] card-side bg-base-100 hover:shadow-xl border-2"
//             >
//               <div className="card-body w-[100%]">
//                 <h2 className="text-3xl font-bold text-center mb-2 underline">
//                   {assignment.Tittle ? assignment.Tittle : "Nothing"}
//                 </h2>
//                 <p className="text-2xl font-bold">
//                   <span className="text-lg font-semibold">Submitted By:</span>{" "}
//                   {assignment.SubmitterName}
//                 </p>
//                 <p className="text-2xl font-bold">
//                   <span className="text-lg font-semibold">Total Marks:</span>{" "}
//                   {assignment.Marks}
//                 </p>
//                 {/* Button to open the PDF modal */}
//                 <button
//                   onClick={() => openPdfModal(assignment.PDFLink)} // Replace with the actual field name for the PDF link
//                   className="btn bg-[#FE834C] mt-5 text-white font-bold"
//                 >
//                   Preview PDF
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* PDF Modal */}
//         {isPdfModalOpen && (
//           <div className="pdf-modal">
//             <div className="pdf-modal-content">
//               <button onClick={closePdfModal} className="pdf-modal-close-btn">
//                 Close
//               </button>
//               <Document file={pdfLinkToPreview}>
//                 <Page pageNumber={1} />
//               </Document>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   } else {
//     return (
//       <p className="text-xl md:text-4xl py-48 font-bold italic text-center">
//         No Relevant Assignment Submitted Yet.
//       </p>
//     );
//   }
// };

// export default SubmittedAssignment;
