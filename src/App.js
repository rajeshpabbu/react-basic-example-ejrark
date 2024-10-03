import logo from "./logo.svg";
import "./App.css";

import { useCallback, useEffect } from "react";
import "@innovatrics/dot-document-auto-capture";

const DocumentCamera = (props) => {
  useEffect(() => {
    const documentAutoCaptureHTMLElement = document.getElementById(
      "x-dot-document-auto-capture"
    );

    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  return <x-dot-document-auto-capture id="x-dot-document-auto-capture" />;
};

const App = () => {
  const handleDocumentPhotoTaken = ({ image, data }, content) => {
    // ...
  };

  // Save function reference to prevent unnecessary reload of component
  const handleError = useCallback((error) => {
    alert(error);
  }, []);

  return (
    <DocumentCamera
      cameraFacing="environment"
      onPhotoTaken={handleDocumentPhotoTaken}
      onError={handleError}
      sessionToken="1111-222-333-4444"
    />
  );
};

export default App;
