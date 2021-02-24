/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../redux';
import { VictoryPie } from 'victory';


function PieChart({ pieChartData, fetchApi }) {
    useEffect(() => {
        fetchApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const ios = pieChartData.datas[0];
    const android = pieChartData.datas[1];
    const iosPer = Math.round(ios / (ios + android) * 100);
    const androidPer = Math.round(android / (ios + android) * 100);
    return pieChartData.loading ? (
        <h2>Loading</h2>
    ) : pieChartData.error ? (
        <h2>{pieChartData.error}</h2>
    ) : (
        <div>
            <h3>Device Type</h3>
            <div style={{
                display: "flex",
                alignItems: "center"
                }}>
                <svg width={400} height={300}>
                    <VictoryPie
                    colorScale = {["cyan", "purple"]} 
                    standalone={false}
                    width={300} height={300}
                    innerRadius={75}
                    data={[
                        { x: "ios", y: iosPer },
                        { x: "adr", y: androidPer }
                    ]}
                    />
                </svg>
                <div>
                    <table>
                    <tr>
                        <td>
                        <span id="ios"></span>iOS: 
                        <div style={{marginLeft: "40px", fontSize: "20px"}}>{iosPer}%</div>
                        </td>
                        <td>{ios}</td>
                    </tr>
                    <tr>
                        <td>
                        <span id="android"></span>Android: 
                        <div style={{marginLeft: "40px", fontSize: "20px"}}>{androidPer}%</div>
                        </td>
                        <td>{android}</td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pieChartData: state.pieChart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchApi: () => dispatch(fetchApi())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PieChart);