import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Doughnut } from 'react-chartjs-2';


export class Dashboard extends Component {
    render() {
        const data = {
            labels: [
                'Health',
                'Misc Health',
                'Other',
                'Retirement'
            ],
            datasets: [{
                data: [40, 15, 20, 25],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF3031'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#FF3031'
                ]
            }]
        };
        return (
            <div >
                <div className='container-fluid'>
                    <div className='row mt-2'>
                        <div className='col-md-8 col-sm-12'>
                            <span className='h4'>Welcome to Your personalized benefit dashboard, ABC</span>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-8 col-sm-12'>
                            <span className='h1'>Dashboard</span>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='card col-md-6 col-sm-12 mr-3 shadow bg-light'>
                            <div className='row m-2'> 
                                <div className='col-md-10 col-sm-12'>
                                    <span className='h3'><b>Benefits overview</b></span>
                                </div>
                                <div className='col-md-2 col-sm-12'>
                                <a href="#" style={{ textTransform: 'none' }}><h5>Edit</h5></a>
                                </div>
                            </div>
                            <div className='card-body mb-2'>
                                <Doughnut
                                height={170}
                                options={{
                                    cutoutPercentage: 65,
                                    legend: {
                                        display: true,
                                        position: 'right',
                                        align: "center",
                                        fontFamily: "Allianz-Neo",
                                        textDirection: 'ltr',
                                          labels: {
                                            usePointStyle: true,
                                            fontColor: "#006192",
                                          }
                                    }
                                }}
                                data={data} />
                            </div>
                            
                        </div>
                        <div className='card col-md-5 ml-5 col-sm-12 shadow bg-light'>
                            <div className='row m-2'>
                                <div className='col-md-10 col-sm-12'>
                                    <span className='h4'><b>Contributions overview</b></span>
                                </div>
                                <div className='col-md-2 col-sm-12'>
                                    <a href="#" style={{ textTransform: 'none' }}><h5>Edit</h5></a>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-12 col-sm-12'>
                                        <span><b>TOTAL BALANCE</b></span><br />
                                        <span className='h3'><b>$0</b></span>
                                    </div>
                                </div><br/>
                                <div className='row mt-3'>
                                    <div className='col-md-6 col-sm-12'>
                                        <span><b>TOTAL VANGUARD ASSETS</b></span><br />
                                        <span className='h3'><b>$0</b></span>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <span><b>CONNECTED ACCOUNT BALANCE</b></span><br />
                                        <span className='h3'><b>$0</b></span>
                                    </div>
                                </div><br/>
                                <div className='row mt-3 mb-2'>
                                    <div className='col-md-6 col-sm-12'>
                                        <span><b>YEARLY CONTRIBUTIONS</b></span><br />
                                        <p className='h3'><b>$0</b></p>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <span><b>RISK ATTRIBUTE</b></span><br />
                                        <p className='h3'><b>Moderate</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
