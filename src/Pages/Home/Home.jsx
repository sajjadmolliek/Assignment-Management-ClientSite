import { motion } from "framer-motion";
import Feature from "./Feature/Feature";
import Faq from "./FAQ/FAQ";
import Banner from "./Banner/Banner";
import PDFPreview from "../../Pdf/Pdf";
import PDFViewer from "../../Pdf/Pdf";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    start: { x: 0 },
    end: { x: 100 },
  };

  // const pdfLink = 'https://www.example.com/sample.pdf';

  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Faq></Faq>

      <div className="w-[50%] mx-auto  ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={textVariants}
            initial="start"
            animate="end"
            transition={{
              repeat: Infinity, // Infinitely repeat the animation
              repeatType: "reverse", // Reverse the animation on each repeat
              duration: 1, // Duration of each animation cycle
            }}
          >
            This is an animated div with a copyright symbol: &copy;
          </motion.div>
        </motion.div>
      </div>

      <br />
      <br />
      <br />






      {/* <div>
      <h1>PDF Preview</h1>
      <PDFPreview pdfLink={pdfLink} />
    </div> */}


<PDFViewer></PDFViewer>









    </div>
  );
};

export default Home;
