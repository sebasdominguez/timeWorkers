import React from "react";
import {
  DivContenedor,
  DivImage,
  DivLogoImg,
  Image,
  LoggingForm,
  DivTitle,
  DivForm,
  H1,
  H3,
  Form,
  FormInput,
  SubInput,
  Button,
  Label,
  Input,
  DivInput,
  DivInput1,
  DivInput2,
  DivInput3,
  Required,
  ButtonRegister,
} from "./style";

export default ({
  handleSubmit,
  handleChange,
  userFail,
  valor,
  register,
  registered,
  setRegister,
}) => {
  return (
    <DivContenedor>
      <DivImage>
        <DivLogoImg>
          <Image
            src="https://www.oowlish.com/wp-content/uploads/2017/10/header-logo-light.png"
            alt="Logo"
            onClick={() => window.location.reload(false)}
          />
        </DivLogoImg>
      </DivImage>
      <LoggingForm>
        <DivForm>
          <DivTitle>
            {register ? (
              <H1>Register</H1>
            ) : (
              <div>
                {registered ? ( // user asked to register and did not register yet
                  <H1>Excelent! Now let´s Login</H1>
                ) : (
                  <H1>Login</H1>
                )}
              </div>
            )}
            <H3>Enter your data</H3>
          </DivTitle>
          <Form onSubmit={handleSubmit}>
            <FormInput>
              {register ? (
                <SubInput>
                  <Label colors={valor.email}>Name</Label>
                  <DivInput>
                    <DivInput1>
                      <DivInput2>
                        <DivInput3></DivInput3>
                        <Input
                          colors={valor.email}
                          name="name"
                          onChange={handleChange}
                        />
                        {valor.name === "" ? (
                          <Required>Required</Required>
                        ) : null}
                      </DivInput2>
                    </DivInput1>
                  </DivInput>
                </SubInput>
              ) : null}
              <SubInput>
                <Label colors={valor.email}>Email</Label>
                <DivInput>
                  <DivInput1>
                    <DivInput2>
                      <DivInput3></DivInput3>
                      <Input
                        colors={valor.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                      {valor.email === "" ? (
                        <Required>Required</Required>
                      ) : null}
                    </DivInput2>
                  </DivInput1>
                </DivInput>
              </SubInput>
              <SubInput>
                <Label colors={valor.password}>Password</Label>
                <DivInput>
                  <DivInput1>
                    <DivInput2>
                      <DivInput3></DivInput3>
                      <Input
                        colors={valor.password}
                        type="password"
                        name="password"
                        onChange={handleChange}
                      />
                      {valor.password === "" ? (
                        <Required>Required</Required>
                      ) : null}
                    </DivInput2>
                  </DivInput1>
                </DivInput>
              </SubInput>
            </FormInput>
            {register ? (
              <Button type="submit"> Register </Button>
            ) : userFail ? (
              <Button userFail={userFail} type="submit">
                {" "}
                Try again!{" "}
              </Button>
            ) : (
              <Button type="submit"> Login </Button>
            )}
          </Form>
        </DivForm>
        {register ? (
          <ButtonRegister onClick={() => setRegister(false)}>
            Back to Login
          </ButtonRegister>
        ) : (
          <ButtonRegister onClick={() => setRegister(true)}>
            Want Register ?
          </ButtonRegister>
        )}
      </LoggingForm>
    </DivContenedor>
  );
};
