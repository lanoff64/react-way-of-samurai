import React from 'react';


const News = (props) => {
    const lenta = <iframe title={'news'} width="800" height="350" className="news"
                           src="http://feeds.feedburner.com/lenta/MpsS"/>;

    const zakonKz = <iframe title={'news'} width="800" height="350" className="news"
                            src="http://feeds.feedburner.com/zakon/vWos"/>;

    const mailKz = <iframe title={'news'} width="800" height="350" className="news"
                           src="http://feeds.feedburner.com/mail/YeGC"/>;

    const kurs = <iframe title={'news'} width="800" height="350" className="news"
                           src="http://feeds.feedburner.com/com/cMiY"/>;

    const tenge = <iframe title={'news'} width="800" height="350" className="news"
                           src="http://feeds.feedburner.com/kzt"/>;


    return (
        <div>
            <div>
                {lenta}
            </div>


            <div>
                {zakonKz}
            </div>

            <div>
                {mailKz}
            </div>

            <div>
                {kurs}
            </div>

            <div>
                {tenge}
            </div>

        </div>


    );

}
export default News;
