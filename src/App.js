import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi' //importing icons
import { TooltipComponent } from '@syncfusion/ej2-react-popups' //importing syncfusion popups 

import "./App.css"

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-min-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top" >
                            <button>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;