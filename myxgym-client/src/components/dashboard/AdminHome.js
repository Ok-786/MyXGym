import Featuredinfo from './Featuredinfo';
import scriptCSS from './DashboardStyles';

export default function AdminHome() {
    const classes = scriptCSS();

    return (
        <div className={classes.home1}>
            <Featuredinfo />
        </div>
    )
}
