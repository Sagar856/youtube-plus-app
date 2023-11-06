import LifeCycleDemo from '../../containers/LifeCycleDemo/LifeCycleDemo';
import TrendingVideoList from '../../containers/TrendingVideoList/TrendingVideoList';
import Jumbotron from './Jumbotron/Jumbotron';
import LatestVideo from './LatestVideo/LatestVideo';
import MyProfile from '../../containers/MyProfile/MyProfile';
import Subscription from '../HomePage/Subscription/Subscription';
import RecommendedVideoList from '../../containers/RecommendedVideoList/RecommendedVideoList';
import Gallery from './Gallery/Gallery';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <Jumbotron />
        <h2>Latest Videos | props demo</h2>
        <div className="row">
          <div className="col-md-3">
            <LatestVideo
              title="Devid Guetta Hey-MAMA ERS-remix"
              thumbnailUrl="https://i.ytimg.com/vi/-0YyaPYAiRw/hq720.jpg?sqp=-…RhlIGUoZTAP&rs=AOn4CLDmpgjGj7J88Ou_9o1DciESnVgtqA"
              channel="Beats House"
              views="443K"
              publishedDate="5 hours ago"></LatestVideo>
          </div>
          <div className="col-md-3">
            <LatestVideo
              title="Imagine dragons thunder-Song"
              thumbnailUrl="https://i.ytimg.com/vi/ICFj7bjR4hY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDqKEXHk0vJ7JJLtnbxRsnxyJVzWA"
              channel="Music Vibe"
              views="3.5K"
              publishedDate="2 weeks ago"></LatestVideo>
          </div>
          <div className="col-md-3">
            <LatestVideo
              title="Transformers Optimus vs megatron fight"
              thumbnailUrl="	https://i.ytimg.com/vi/llb7AOY5whA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBvVtrM6qqYDv2RXL8u6reN8LhzTw"
              channel="Movie Gasm"
              views="4.1M"
              publishedDate="1 month ago"></LatestVideo>
          </div>
          <div className="col-md-3">
            <LatestVideo
              title="What lies beyond solar system"
              thumbnailUrl="https://i.ytimg.com/vi/qOpYYPzVOG4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCqofwsY9_L7eG9C8Ny63DeUyoSUQ"
              channel="Kosmo"
              views="639K"
              publishedDate="15 hours ago"></LatestVideo>
          </div>
        </div>
        <hr />
        <h2>Trending videos | class comp, states, Events, props demo</h2>
        <TrendingVideoList />
        <hr />
        <h2>Recommended Videos</h2>
        <RecommendedVideoList />
        <hr />
        <h2>Life Cycle Hooks Demo | Available to Class Comp Only</h2>
        <LifeCycleDemo />
        <hr />
        <h2>My Profile | Two way Binding</h2>
        <MyProfile />
        <hr />
        <Subscription />
        <hr />
        <h2>Gallery component</h2>
        <Gallery />
      </div>
    </>
  );
};

export default HomePage;
