import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { TextField } from "formik-material-ui";
import {
  Card,
  CardContent,
  MuiThemeProvider,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import React, { Fragment, useState } from "react";
import { object } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@mui/system";
import { theme } from "./DashboardStyles";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function CreateClients() {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <Card>
          <CardContent
            style={{
              width: "90vh",
              paddingInline: "6vh",
              paddingBlockEnd: "3vh",
            }}
          >
            <FormikStepper
              initialValues={{}}
              onSubmit={async (values) => {
                console.log("1");
                const response = await fetch(
                  "http://localhost:8000/api/auth/client/signup",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      token: localStorage.token,
                    },
                    body: JSON.stringify(values),
                  }
                );

                const parseRes = await response.json();

                console.log("asd");
                console.log(parseRes);
                setTimeout(function () {
                  if (parseRes.userCreated) {
                    toast.success("User has been created!");
                  } else {
                    toast.error(parseRes);
                  }
                }, 3000);
              }}
            >
              <FormikStep
                label="Personal Info"
                validationSchema={object({
                  firstName: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  lastName: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  streetAddress: Yup.string()
                    .min(2, "Too Short!")
                    .max(255, "Too Long!")
                    .required("Required"),
                  appartmentNumber: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  city: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  country: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  state: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  email: Yup.string().email().required("Required"),
                  age: Yup.number().required("Required"),
                })}
              >
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "32%", marginInlineEnd: "1%" }}
                    name="firstName"
                    component={TextField}
                    label="First Name"
                  />
                  <Field
                    style={{ width: "32%", marginInline: "1%" }}
                    name="lastName"
                    component={TextField}
                    label="Last Name"
                  />
                  <Field
                    style={{ width: "32%", marginInlineStart: "1%" }}
                    type="email"
                    name="email"
                    component={TextField}
                    label="Email"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="streetAddress"
                    component={TextField}
                    label="Street Address"
                  />
                  <Field
                    style={{ width: "49%", marginInlineStart: "1%" }}
                    name="appartmentNumber"
                    component={TextField}
                    label="Appartment Number"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "32%", marginInlineEnd: "1%" }}
                    name="country"
                    component={TextField}
                    label="Country"
                  />
                  <Field
                    style={{ width: "32%", marginInline: "1%" }}
                    name="state"
                    component={TextField}
                    label="State"
                  />
                  <Field
                    style={{ width: "32%", marginInlineStart: "1%" }}
                    name="city"
                    component={TextField}
                    label="City"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="age"
                    type="number"
                    component={TextField}
                    label="Age"
                  />
                </Box>
              </FormikStep>
              <FormikStep
                label="Body Measurements"
                validationSchema={object({
                  height: Yup.number().required("Required"),
                  weight: Yup.number().required("Required"),
                  fat: Yup.number().required("Required"),
                  heartRate: Yup.number().required("Required"),
                  bloodPressure: Yup.number().required("Required"),
                  fitnessGoals: Yup.string().required("Required"),
                })}
              >
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="height"
                    type="number"
                    component={TextField}
                    label="Height(inches)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="weight"
                    type="number"
                    component={TextField}
                    label="Body Weight"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="fat"
                    type="number"
                    component={TextField}
                    label="Body Fat Percentage"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="heartRate"
                    type="number"
                    component={TextField}
                    label="Resting Heart Rate"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="bloodPressure"
                    type="number"
                    component={TextField}
                    label="Blood Pressure"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="fitnessGoals"
                    component={TextField}
                    label="Fitness Goals"
                  />
                </Box>
              </FormikStep>
              <FormikStep
                label="More Info"
                validationSchema={object({
                  neck: Yup.number().required("Required"),
                  chest: Yup.number().required("Required"),
                  rightBicep: Yup.number().required("Required"),
                  leftBicep: Yup.number().required("Required"),
                  waist: Yup.number().required("Required"),
                  hips: Yup.number().required("Required"),
                  rightThigh: Yup.number().required("Required"),
                  leftThigh: Yup.number().required("Required"),
                  rightCalf: Yup.number().required("Required"),
                  leftCalf: Yup.number().required("Required"),
                })}
              >
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="neck"
                    type="number"
                    component={TextField}
                    label="Neck(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="chest"
                    type="number"
                    component={TextField}
                    label="Chest(cm)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="rightBicep"
                    type="number"
                    component={TextField}
                    label="Right Bicep(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="leftBicep"
                    type="number"
                    component={TextField}
                    label="Left Bicep(cm)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="waist"
                    type="number"
                    component={TextField}
                    label="Waist(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="hips"
                    type="number"
                    component={TextField}
                    label="Hips(cm)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="rightThigh"
                    type="number"
                    component={TextField}
                    label="Right Thigh(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="leftThigh"
                    type="number"
                    component={TextField}
                    label="Left Thigh(cm)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="rightCalf"
                    type="number"
                    component={TextField}
                    label="Right Calf(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="leftCalf"
                    type="number"
                    component={TextField}
                    label="Left Calf(cm)"
                  />
                </Box>
              </FormikStep>
            </FormikStepper>
          </CardContent>
        </Card>
      </MuiThemeProvider>
    </Fragment>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [isLoading, setIsLoading] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          setIsLoading(true);
          await props.onSubmit(values, helpers);
          await setTimeout(() => {
            setIsLoading(false);
            helpers.resetForm();
            setStep(0);
          }, 4000);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form autoComplete="off">
        <Spinner loading={isLoading} />
        <Stepper activeStep={step} alternativeLabel>
          {childrenArray.map((child) => (
            <Step key={child.props.label}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ marginBlockStart: "50px" }}></div>
        {currentChild}
        <div style={{ marginBlockStart: "20px" }}>
          <Button
            disabled={step === 0 && true}
            variant="contained"
            color="primary"
            onClick={() => setStep((s) => s - 1)}
            style={{ marginInlineEnd: "20px" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color={isLastStep() ? "primary" : "primary"}
            type="submit"
          >
            {isLastStep() ? "Submit" : "Next"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
