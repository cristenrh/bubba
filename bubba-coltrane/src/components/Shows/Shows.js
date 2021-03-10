
import './Shows.css';
import Script from "react-load-script";
import React from "react";

class Shows extends React.Component {
	state = { scriptLoaded: false };

	handleScriptError() {
		console.log("Error while loading script");
	}

	handleScriptLoad() {
		console.log("Script loaded successfully");
		this.setState({ scriptLoaded: true });
	}

	render() {
		return (
			<div>
				<Script
					url="https://widget.bandsintown.com/main.min.js"
					onError={this.handleScriptError.bind(this)}
					onLoad={this.handleScriptLoad.bind(this)}
				/>

            <div className="App">
                    <div >
                        <div className="container shows site-banner-bg">
                            <div className="site-banner-header">
                                <h1>
                                    Shows and Events
                                </h1>
                            </div>

                        </div>
                        <div className="content">
                       {// eslint-disable-next-line
                        }<a class="bit-widget-initializer"
                                data-artist-name="Bubba Coltrane and the Train Wrecks" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false"
                                data-text-color="#ffffff" data-link-color="goldenrod" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-link-text-color="#FFFFFF"
                                data-display-lineup="false" data-display-play-my-city="false" data-separator-color="rgba(124,124,124,0.25)"></a>
                        </div>
                    </div>
                </div>
         </div>
		);
	}
}

export default Shows;

