import React, {Component} from "react";
import SingleChart from "./SingleChart/SingleChart";
import {connect} from 'react-redux';
import * as actionsRedux from '../../store/actions/charts';
import classes from './ChartSet.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";

class ChartSet extends Component{


    render() {
        let bestPaidActorsChart = (<h3
            className={classes.active}
            onClick={this.props.fetchChartData.bind(this, 0)}>
            Show best-paid worldwide actors in 2019
        </h3>);
        if (this.props.loading){
            bestPaidActorsChart = <Spinner />;
        }
        if (this.props.charts['0'] ){
            bestPaidActorsChart = (
                <div>
                    <h3 className={classes.disabled}>
                        Best-paid worldwide actors in 2019
                    </h3>
                    <p><i>(in million U.S. dollars)</i></p>
                    <SingleChart chartData={this.props.charts['0']}/>
                </div>);
        }


        return (
            <div className={classes.ChartSet}>
                {bestPaidActorsChart}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        charts: state.charts.Charts,
        loading: state.charts.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchChartData: (Id) => dispatch(actionsRedux.fetchData(Id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSet);

