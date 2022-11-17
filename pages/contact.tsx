import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import { PageHeader } from '../common/Project/styles';
import { ContactBtn, InputGroup, PageSection } from '../common/Contact/style';
import { Input } from '../common/Contact/Input';
import { ButtonContainer } from '../common/Resume/Styles';
import { Button } from '../stories/Button';

 const Contact: NextPage = () => {
  return (
    <Layout>
        <div>
            <PageHeader>{`{`} Contact {`}`}</PageHeader>
            <PageSection>
              <InputGroup>
                <Input placeholder='Enter Name'/>
              </InputGroup>
              <InputGroup>
                <Input placeholder='Enter Email address'/>
              </InputGroup>
              <InputGroup>
                <Input boxType='textArea' placeholder="Hi Bimbo, Nice Portfolio I'll like to discuss... "/>
              </InputGroup>
              <ButtonContainer>
                 <ContactBtn>Send Message</ContactBtn>
              </ButtonContainer>
            </PageSection>
        </div>
    </Layout>
  )
}

export default Contact