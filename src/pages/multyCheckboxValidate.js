import { useState } from "react";
    import * as yup from "yup";
    import { FieldArray, Form, Formik } from "formik";
    
    function MultiCheckboxValidate() {
      const [newAsset, setNewAsset] = useState("");
      const [assets, setAssets] = useState([
        "Property",
        "Motor Vehicles",
        "Financial Assets",
      ]);

      const initialValues = {
        assets: [],
      };
      
      const validationSchema = yup.object().shape({
        assets: yup.array().min(1).of(yup.string().required()).required(),
      });
    
      const handleAddNewAsset = () => {
        if (newAsset) {
          setAssets([...assets, newAsset]);
          setNewAsset("");
        }
      };
    
      return (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("form values if validation succeed: ", values);
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <FieldArray
                  name="assets"
                  render={(arrayHelpers) => (
                    <>
                      {assets.map((asset, idx) => (
                        <label className="form-check-label my-1">
                          <input
                            name={`assets.${idx}`}
                            type="checkbox"
                            className="form-check-input"
                            value={asset}
                            checked={props.values.assets.includes(asset)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                arrayHelpers.push(asset);
                              } else {
                                const index = props.values.assets.indexOf(asset);
                                arrayHelpers.remove(index);
                              }
                            }}
                          />
                          <span className="mx-2">{asset}</span>
                        </label>
                      ))}
                    </>
                  )}
                />
                <input
                  type="text"
                  value={newAsset}
                  onChange={(e) => setNewAsset(e.target.value)}
                />
                <button type="button" onClick={handleAddNewAsset}>
                  Others (specify)
                </button>
              </Form>
            )}
          </Formik>
        </>
      );
    }

    export default MultiCheckboxValidate