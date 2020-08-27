import React from 'react';
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
  FormButtom,
  Button,
  Label,
  Input,
  DivInput,
  DivInput1,
  DivInput2,
  DivInput3,
  Required,
  Buttons,
  ButtonRegister
} from './style';
import { Link } from 'react-router-dom';

export default ({ handleSubmit, handleChange, userFail, valor, wantRegister, register, registered }) => {
  return (
    <DivContenedor>
      <DivImage>
          <DivLogoImg>
            <Image src='https://www.oowlish.com/wp-content/uploads/2017/10/header-logo-light.png' alt="Logo" />
          </DivLogoImg>
      </DivImage>
      <LoggingForm>
        <DivForm>
          <DivTitle>
            {register === false ? 
              <H1>Login</H1>
            :
              <>{registered == false ? 
                <H1>Register</H1>
                :
                <H1>Excelente! Let´s Login</H1>
               }
              </>
            }
            <H3>Enter your data</H3>
          </DivTitle>
          <Form onSubmit={handleSubmit}>
            <FormInput>
              { register === true ? 
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
                        {valor.name === '' ? <Required>Required</Required> : null}
                      </DivInput2>
                    </DivInput1>
                  </DivInput>
                </SubInput>
                : null 
              }
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
                      {valor.email === '' ? <Required>Required</Required> : null}
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
                      {valor.password === '' ? <Required>Required</Required> : null}
                    </DivInput2>
                  </DivInput1>
                </DivInput>
              </SubInput>
            </FormInput>
            {userFail === false ? 
              <>
              { register === true && registered === false ? 
                <ButtonRegister type="submit"> Register </ButtonRegister>
                :
                <Button type="submit"> Login </Button>
              }
              </>
              :
              <>
                {userFail === true && register === true ? 
                <Button type="submit"> Register </Button> 
                :
                <Button type="submit"> Login </Button> 
                }
              </>
            }
            { register === false && registered === false ? <ButtonRegister onClick={wantRegister}> Want Register ? </ButtonRegister> : null }
          
          </Form>
        </DivForm>
      </LoggingForm>
    </DivContenedor>
  );
};
