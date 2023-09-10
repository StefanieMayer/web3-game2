import React, { useEffect, useState } from 'react';
import ImageGrid from "../components/ImageGrid";


export default function OngoingCampaigns(props) {

    return (
        <div className="App">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4"> Ongoing Campaigns</h1>
                <br></br><br></br>
                <ImageGrid></ImageGrid>
            </div>
        </div>
    );
}
