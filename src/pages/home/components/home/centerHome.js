import React, { useState, useEffect } from "react";
import "./centerHome.css";
import perform from "../../../../service/Service";
import ENDPOINTS from "../../../../service/API";
import { ResponseCode } from "../../../../service/Code";
import TweetCard from "./components/tweetCard";

export default function CenterHome() {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(0);
  const [limnit, _] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      var response = await perform(ENDPOINTS.TWEETS.GET_TWEETS, {
        page: page,
        limit: limnit,
      });
      if (response.code == ResponseCode.OK) {
        // setTweets(response.data);
        setTweets((prevTweets) => [...prevTweets, ...response.data]);
        setPage((prevPage) => prevPage + 1);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home_center">
      {/* bar */}
      <div className=""></div>
      {tweets && tweets.length > 0 ? (
        tweets.map((tweet, index) => (
          <TweetCard
            key={index}
            props={{
              urlAvt: tweet.user.urlAvt,
              fullName: tweet.user.fullName,
              urlImage: tweet.urlImage,
              urlVideo: tweet.urlVideo,
              loves: tweet.totalLove,
              comments: tweet.totalComment,
              reposts: tweet.totalRepost,
              saves: tweet.totalSaved,
              content: tweet.content,
              timestamp: tweet.createAt,
            }}
          />
        ))
      ) : (
        <p>No tweets available</p>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
