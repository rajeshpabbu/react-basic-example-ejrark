import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import { createStore } from 'redux';
import { useCallback, useEffect } from 'react';
import '@innovatrics/dot-document-auto-capture';
import { Provider } from 'react-redux';

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const videoConstraints = {
  facingMode: 'environment',
};

//alert(JSON.stringify(videoConstraints));

const store = createStore(reducer);

export default function BasicExample() {
  return (
    <Provider store={store}>
      <Router>
        <Links />
        <hr />
        <App />
      </Router>
    </Provider>
  );
}

function Links() {
  return (
    <ul className="nav nav-pills">
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/dashboard">Dashboard</Link>
      </li> */}
      <li>
        <Link to="/auto-capture">Auto Capture</Link>
      </li>
    </ul>
  );
}

function App() {
  const handleDocumentPhotoTaken = ({ image, data }, content) => {
    // ...
  };

  // Save function reference to prevent unnecessary reload of component
  const handleError = useCallback((error) => {
    console.log(error);
  }, []);
  return (
    <div>
      <Switch>
        {/* <Route path="/dashboard">
          <Dashboard facingMode="front" />
        </Route> */}
        <Route path="/auto-capture">
          <DocumentCamera
            cameraFacing="environment"
            onPhotoTaken={handleDocumentPhotoTaken}
            onError={handleError}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

// function Dashboard({ facingMode }) {
//   console.log(facingMode);
//   return (
//     <>
//       <Webcam
//         audio={false}
//         screenshotFormat="image/jpeg"
//         width="100%"
//         videoConstraints={videoConstraints}
//       >
//         {({ getScreenshot }) => (
//           <button
//             onClick={() => {
//               const imageSrc = getScreenshot();
//             }}
//           >
//             Capture photo
//           </button>
//         )}
//       </Webcam>
//     </>
//   );
// }

export const DocumentCamera = (props) => {
  useEffect(() => {
    const documentAutoCaptureHTMLElement = document.getElementById(
      'x-dot-document-auto-capture'
    );

    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  return <x-dot-document-auto-capture id="x-dot-document-auto-capture" />;
};

const Page = () => {
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
