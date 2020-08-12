import React, {Component} from "react";
import SingleChart from "./SingleChart/SingleChart";
import {connect} from 'react-redux';
import * as actionsRedux from '../../store/actions/charts';
import classes from './ChartSet.module.css';
import Spinner from "../../components/UI/Spinner/Spinner";

class ChartSet extends Component{
    componentDidMount() {
        this.props.fetchChartData(0);
    }

    render() {
        let bestPaidActorsChart = null;
        if (this.props.loading && this.props.loadingItemId === 0){
            bestPaidActorsChart = <Spinner />;
        }
        if (this.props.charts['0'] ){
            bestPaidActorsChart = (
                <div>
                    <h3 className={classes.disabled}>
                        Best-paid worldwide actors in 2019
                    </h3>
                    <p><i>(in million U.S. dollars)</i></p>
                    <SingleChart chartData={this.props.charts['0']}
                                 offset={0}/>
                </div>);
        }

        let moviesWithTheMostFacebookFans = (<h3
            className={classes.active}
            onClick={this.props.fetchChartData.bind(this, 1)}>
            Show movies with the most Facebook fans as of June 2020
        </h3>);
        if (this.props.loading && this.props.loadingItemId === 1){
            moviesWithTheMostFacebookFans = <Spinner />;
        }
        if (this.props.charts['1'] ){
            moviesWithTheMostFacebookFans = (
                <div>
                    <h3 className={classes.disabled}>
                        Movies with the most Facebook fans as of June 2020
                    </h3>
                    <p><i>(in millions)</i></p>
                    <SingleChart chartData={this.props.charts['1']}
                                 offset={0}/>
                </div>);
        }

        let numberOfMoviesReleased = (<h3
            className={classes.active}
            onClick={this.props.fetchChartData.bind(this, 2)}>
            Show number of movies released in North America from 1995 to 2019, by genre
        </h3>);
        if (this.props.loading && this.props.loadingItemId === 2){
            numberOfMoviesReleased = <Spinner />;
        }
        if (this.props.charts['2'] ){
            numberOfMoviesReleased = (
                <div>
                    <h3 className={classes.disabled}>
                        Movies with the most Facebook fans as of June 2020
                    </h3>
                    <SingleChart chartData={this.props.charts['2']}
                                 offset={0}/>
                </div>);
        }

        let numberOfMoviesReleasedYears = (<h3
            className={classes.active}
            onClick={this.props.fetchChartData.bind(this, 3)}>
            Show number of movies released in the United States and Canada from 2000 to 2019
        </h3>);
        if (this.props.loading && this.props.loadingItemId === 3){
            numberOfMoviesReleasedYears = <Spinner />;
        }
        if (this.props.charts['3'] ){
            numberOfMoviesReleasedYears = (
                <div>
                    <h3 className={classes.disabled}>
                        Number of movies released in the United States and Canada from 2000 to 2019
                    </h3>
                    <SingleChart chartData={this.props.charts['3']}
                                        offset={0}/>
                </div>);
        }

        let frequencyOfGoingToMovieTheaters= (<h3
            className={classes.active}
            onClick={this.props.fetchChartData.bind(this, 4)}>
            Show frequency of going to movie theaters to see a movie among adults in the
            United States as of June 2019
        </h3>);
        if (this.props.loading && this.props.loadingItemId === 4){
            frequencyOfGoingToMovieTheaters = <Spinner />;
        }
        if (this.props.charts['4'] ){
            frequencyOfGoingToMovieTheaters = (
                <div>
                    <h3 className={classes.disabled}>
                        Frequency of going to movie theaters to see a movie among adults in the
                        United States as of June 2019
                    </h3>
                    <p><i>(in percentage)</i></p>
                    <SingleChart chartData={this.props.charts['4']}
                                    offset={30}/>
                </div>);
        }

        return (
            <div className={classes.ChartSet}>
                {bestPaidActorsChart}
                {moviesWithTheMostFacebookFans}
                {numberOfMoviesReleased}
                {numberOfMoviesReleasedYears}
                {frequencyOfGoingToMovieTheaters}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        charts: state.charts.Charts,
        loading: state.charts.loading,
        loadingItemId: state.charts.lastFetchId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchChartData: (Id) => dispatch(actionsRedux.fetchData(Id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSet);

