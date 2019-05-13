import React, { useState } from 'react';
import Dialog, {alert, confirm, modal} from '../lib/dialog/dialog';

const DialogExample:React.FunctionComponent = () => {
    const [x, setX] = useState(false);
    const openModal = () => {
        const close = modal(<h1>Hi
            <button onClick={() => close()}>close</button>
        </h1>)
    }

    return (
        <div>
            <div>
                <button onClick={() => setX(!x)}>Dialog</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => {setX(false)}}>Cancel</button>,
                        <button onClick={() => {setX(false)}}>Ok</button>
                    ]
                } onClose={() => {setX(false)}} closeOnClickBg={false}>
                    <div>Hi</div>
                </Dialog>
            </div>
            <div>
                <button onClick={() => alert('hi')}>Alert</button>
                <button onClick={() => confirm('please confirm', () => {console.log('OK')}, () => {console.log('Cancel')})}>Confirm</button>
                <button onClick={openModal}>Modal</button>
            </div>
        </div>
    );
}

export default DialogExample;