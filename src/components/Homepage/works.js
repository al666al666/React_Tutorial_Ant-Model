import React,{useState} from 'react';

import { Button, Modal } from 'antd';

export default function AppWork(){
 
    const [state, setState] = useState({visible:false})

    const Toogle=(e)=>{
        setState({visible:true})
    }

    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
          </div>

          <div className="contentHolder">
            <Button size="large" onClick={(e)=>Toogle(e)}><i className="fas fa-play"></i></Button>
          </div>

          <Modal
            title="Woocommerce Tutorial"
            visible={state.visible}
            onCancel={()=>setState({visible:!state.visible})}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
          </Modal>
        </div>
      </div>
    );
  }


