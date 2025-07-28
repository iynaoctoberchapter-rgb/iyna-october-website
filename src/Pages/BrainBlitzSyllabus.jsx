import React from "react";

function BrainBlitzSyllabus() {
  return (
    <React.Fragment>
        <div className="hero-section">
            <h1>BrainBliTz Syllabus</h1>
            <h3>Get Immersed in Neuroscience</h3>
            <p>
        Explore the comprehensive BrainBliTz syllabus designed to guide you through the fascinating world of neuroscience. From the fundamentals of neural signaling to advanced topics in cognition and neuropathology, our curriculum covers everything you need to excel in your studies and competitions. Dive in and discover the building blocks of the brain, the mechanisms of sensation and movement, and the latest insights into brain development and disorders.
    </p>
    </div>

    <div className="title">
            <hr />
            <h2>Syllabus Table</h2>
            <hr />
        </div>
        <div className="sub-title">
          <h3>Neural Signaling</h3>
        </div>
        <table className="content-table">
            <thead>
              <tr>
                <th>Neuroanatomy</th>
                <th>Concepts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Neurons and Glia</td>
                <td>
                    <ul>
                        <li>Neuron structure (axon, dendrites, synapse)</li>
                        <li>Types of glial cells (astrocytes, oligodendrocytes, microglia)</li>
                    </ul>
                </td>
              </tr>
              <tr className="active-row">
                <td>Major Brain Regions</td>
                <td>
                    <ul>
                        <li>Lobes of the brain (frontal, parietal, temporal, occipital)</li>
                        <li>Subcortical structures (thalamus, hypothalamus, basal ganglia, limbic system)</li>
                    </ul>
                </td>
              </tr>
              <tr>
                <td>Neuronal Function</td>
                <td>
                    <ul>
                        <li>Resting membrane potential</li>
                        <li>Action potentials</li>
                        <li>Synaptic transmission (chemical and electrical synapses)</li>
                    </ul>
                </td>
              </tr>
              <tr className="active-row">
                <td>Molecular Signaling</td>
                <td>
                    <ul>
                        <li>Neurotransmitters and receptors</li>
                        <li>Signal transduction pathways</li>
                        <li>Second messengers</li>
                    </ul>
                </td>
              </tr>
              <tr>
                <td>Electrophysiology</td>
                <td>
                    <ul>
                        <li>Ion channels and transporters</li>
                        <li>Electrophysiological recording techniques (patch-clamp, EEG, MEG)</li>
                    </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="sub-title">
            <h3>Sensation</h3>
          </div>
        <table className="content-table">
            <thead>
              <tr>
                <th>Systems Neuroscience</th>
                <th>Concepts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sensory Systems</td>
                <td>
                    <ul>
                        <li>Vision</li>
                        <li>Audition</li>
                        <li>Somatosensation</li>
                        <li>Olfaction and gustation</li>
                    </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="sub-title">
            <h3>Movement</h3>
          </div>
          <table className="content-table">
              <thead>
                <tr>
                  <th>Systems Neuroscience</th>
                  <th>Concepts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Motor System</td>
                  <td>
                      <ul>
                          <li>Motor cortex and motor pathways</li>
                          <li>Basal ganglia and cerebellum</li>
                          <li>Spinal cord reflexes</li>
                      </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="sub-title">
              <h3>Brain Development and Plasticity</h3>
            </div>
          <table className="content-table">
              <thead>
                <tr>
                  <th>Neurophysiology</th>
                  <th>Concepts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Neuroplasticity</td>
                  <td>
                      <ul>
                          <li>Synaptic plasticity (LTP, LTD)</li>
                          <li>Neurogenesis</li>
                      </ul>
                  </td>
                </tr>
                <tr className="active-row">
                    <td>Neuroendocrinology</td>
                    <td>
                        <ul>
                            <li>Hormone-brain interactions</li>
                            <li>Stress response and HPA axis</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
            </table>
            <div className="sub-title">
              <h3>Cognitive Neuroscience</h3>
            </div>
          <table className="content-table">
              <thead>
                <tr>
                  <th>Systems Neuroscience</th>
                  <th>Concepts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Integrative Functions </td>
                  <td>
                      <ul>
                          <li>Sleep and circadian rhythms</li>
                          <li>Homeostasis and hypothalamic function</li>
                          <li>Emotion and the limbic system</li>
                      </ul>
                  </td>
                </tr>
                <tr className="active-row">
                    <td>Higher Cognitive Functions</td>
                    <td>
                        <ul>
                            <li>Attention and perception</li>
                            <li>Learning and memory</li>
                            <li>Language and communication</li>
                        </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Executive Functions</td>
                    <td>
                        <ul>
                            <li>Decision making</li>
                            <li>Problem solving</li>
                            <li>Working memory</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
            </table>
            <div className="sub-title">
              <h3>Neuropathology</h3>
            </div>
          <table className="content-table">
              <thead>
                <tr>
                  <th>Clinical Neuroscience</th>
                  <th>Concepts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Neurological Disorders</td>
                  <td>
                      <ul>
                          <li>Neurodegenerative diseases (Alzheimer's, Parkinson's)</li>
                          <li>Psychiatric disorders (depression, schizophrenia)</li>
                          <li>Developmental disorders (autism, ADHD)</li>
                      </ul>
                  </td>
                </tr>
                <tr className="active-row">
                    <td>Diagnostic Techniques</td>
                    <td>
                        <ul>
                            <li>Neuroimaging (MRI, fMRI, PET)</li>
                            <li>Neurophysiological tests (EEG, EMG)</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
            </table>
            <div className="title">
              <hr />
              <h2>References</h2>
              <hr />
            </div>
            <table className="content-table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Neural Signaling</td>
                    <td>
                        <ul>
                            <li>Bear, M. F., Connors, B. W., & Paradiso, M. A. (2015). Neuroscience: Exploring the Brain (4th ed.). Lippincott Williams & Wilkins.</li>
                            <li>Purves, D., Augustine, G. J., Fitzpatrick, D., Hall, W. C., LaMantia, A.-S., Mooney, R. D., Platt, M. L., & White, L. E. (Eds.). (2018). Neuroscience (6th ed.). Sinauer Associates.</li>
                        </ul>
                    </td>
                  </tr>
                  <tr className="active-row">
                      <td>Sensation</td>
                      <td>
                          <ul>
                              <li>Purves, D., Augustine, G. J., Fitzpatrick, D., Hall, W.
                                C., LaMantia, A.-S., Mooney, R. D., Platt, M. L., &
                                White, L. E. (Eds.). (2018). Neuroscience (6th ed.).
                                Sinauer Associates.</li>
                              <li>Siegel, A., & Sapru, H. N. (2015). Essential
                                Neuroscience (3rd ed.). Wolters Kluwer.</li>
                          </ul>
                      </td>
                    </tr>
                    <tr>
                        <td>Movement</td>
                        <td>
                            <ul>
                                <li>Purves, D., Augustine, G. J., Fitzpatrick, D., Hall, W.
                                    C., LaMantia, A.-S., Mooney, R. D., Platt, M. L., &
                                    White, L. E. (Eds.). (2018). Neuroscience (6th ed.).
                                    Sinauer Associates.</li>
                                <li>Siegel, A., & Sapru, H. N. (2015). Essential
                                    Neuroscience (3rd ed.). Wolters Kluwer.</li>
                            </ul>
                        </td>
                      </tr>
                      <tr className="active-row">
                        <td>Brain development</td>
                        <td>
                            <ul>
                                <li>Purves, D., Augustine, G. J., Fitzpatrick, D., Hall, W.
                                    C., LaMantia, A.-S., Mooney, R. D., Platt, M. L., &
                                    White, L. E. (Eds.). (2018). Neuroscience (6th ed.).
                                    Sinauer Associates.</li>
                                <li>Bear, M. F., Connors, B. W., & Paradiso, M. A. (2015).
                                    Neuroscience: Exploring the Brain (4th ed.). Lippincott
                                    Williams & Wilkins.</li>
                            </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Cognitive Neuroscience</td>
                        <td>
                            <ul>
                                <li>Purves, D., Augustine, G. J., Fitzpatrick, D., Hall, W.
                                    C., LaMantia, A.-S., Mooney, R. D., Platt, M. L., &
                                    White, L. E. (Eds.). (2018). Neuroscience (6th ed.).
                                    Sinauer Associates.</li>
                                <li>Bear, M. F., Connors, B. W., & Paradiso, M. A. (2015).
                                    Neuroscience: Exploring the Brain (4th ed.). Lippincott
                                    Williams & Wilkins.</li>
                            </ul>
                        </td>
                      </tr>
                      <tr className="active-row">
                        <td>Neuropathology</td>
                        <td>
                            <ul>
                                <li>Watson, C., Kirkcaldie, M., & Paxinos, G. (2010). The
                                    brain: An introduction to functional neuroanatomy.
                                    Academic Press.</li>
                                <li>Siegel, A., & Sapru, H. N. (2015). Essential
                                    Neuroscience (3rd ed.). Wolters Kluwer.</li>
                            </ul>
                        </td>
                      </tr>
                </tbody>
              </table>
    </React.Fragment>
  );
}

export default BrainBlitzSyllabus;