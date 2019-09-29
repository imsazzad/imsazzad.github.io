import React from 'react'
import rec from '../data/Certificates'
import {RecBox, RecDes, RecWrapper} from '../styles/recStyle.js'
import Layout from '../components/layout'

const Certificates = () => (
    <Layout>
        <RecWrapper>
            <h1>Certificates</h1>
            {
                rec.map(item => (<RecBox key={item.id}>
                        <h3><a href={item.certificateUrl}>{item.name}</a></h3>
                        <p>{item.designation}</p>
                        <p>{item.dated}</p>
                        <RecDes>{item.description}</RecDes>
                        <hr/>
                    </RecBox>
                ))
            }
        </RecWrapper>
    </Layout>
);

export default Certificates
