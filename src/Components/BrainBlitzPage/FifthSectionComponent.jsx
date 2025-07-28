function FifthSectionComponent() {
  return (
      <div className="brain-fifth-section">
            <div className="title">
                <hr />
                <h2>Rules & Instructions</h2>
                <hr />
            </div>
            <p className="section-description">BrainBliTz has a zero-tolerance policy for cheating, giving rise to more equative competitiveness. Thus, contestants must adhere to some rules concerning this policy.</p>
            <div className="cards">
                <div className="row">
                    <div className="card">
                        <h3>01</h3>
                        <p>You must have stable internet connection to prevent any issues.</p>
                     </div>
                     <div className="card">
                        <h3>02</h3>
                        <p>You must Be Ready and prepare your PC
                         before the competition with 30
                         minutes at least.</p>
                     </div>
                </div>
                <div className="row">
                    <div className="card">
                        <h3>03</h3>
                        <p>You mustn't open any tab, only the tab of
                           the competition.</p>
                    </div>
                    <div className="card">
                        <h3>04</h3>
                        <p>We will take screenshots so there
                            musn't be more than one
                            person(You) in the camera</p>
                    </div>
                </div>
             </div>
             <p className="warning"><strong>Warning:</strong> Failure to follow the instructions will lead to disqualification from the competition!</p>
         </div>
  );
}

export default FifthSectionComponent;