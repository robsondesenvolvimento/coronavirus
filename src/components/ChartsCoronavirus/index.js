import React, { useState } from 'react';
import { Chart } from "react-google-charts";

function ChatsCoronavirus(props) {

    const [dados] = useState(props.dados);


    return (
        <div>
            <Chart
                width={'1500px'}
                height={'600px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={dados}
                options={{
                    title: `Dados sobre o coronavirus`,
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Total Population',
                        minValue: 0,
                    },
                    vAxis: {
                        title: props.country_region,
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    ) 
}

export default ChatsCoronavirus