import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import ViewMore from "./pages/ViewMore";

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/editpost/:postId" component={EditPost} />
            <Route exact path="/viewmore/:postId" component={ViewMore} />
        </Switch>
    );
}

export default Routes;
