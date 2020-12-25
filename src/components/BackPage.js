import React from 'react';
import { Route } from 'react-router-dom';

function BackPage({navHeaders,backPageContent,userName}) {
    return (
        <div className=" flex justify-start content-center flex-col w-full" style={{ height: "auto" }}>
        {
          navHeaders.map((item,index) => {

            return <Route path={`/${userName}/${item["title"]}`} key ={index} render={() => backPageContent()} />

          })
        }
      </div>
    )
}

export default BackPage
