import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [query, setQuery] = useState("");
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  const searchChannels = async () => {
    setError(null); // Reset error
    setLoading(true); // Set loading to true
    try {
      const response = await fetch(
        `http://localhost:5000/search-channels?query=${query}`
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setChannels(data);
        setSelectedChannel(null);
        setSubscriberCount(null);
      } else {
        setChannels([]);
        setError("Error: Expected array but received something else.");
        console.error("Error: Expected array but received:", data);
      }
    } catch (error) {
      console.error("Error fetching channels:", error);
      setChannels([]);
      setError("Error fetching channels.");
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  const getSubscriberCount = async (channelId, count = 0) => {
    setError(null); // Reset error
    try {
      const response = await fetch(
        `http://localhost:5000/subscriber-count?channelId=${channelId}`
      );
      const data = await response.json();
      setSubscriberCount(data.followerCount.toLocaleString());

      // Make another API request after a delay
      setTimeout(async () => {
        try {
          const anotherResponse = await fetch(
            `http://localhost:5000/subscriber-count?channelId=${channelId}`
          );
          const anotherData = await anotherResponse.json();
          // Process the response from the another API request
          console.log(`Another API response ${count + 1}:`, anotherData);

          // Make the next recursive call
          getSubscriberCount(channelId, count + 1);
        } catch (error) {
          console.error(
            `Error fetching from another API (attempt ${count + 1}):`,
            error
          );
        }
      }, 1000); // 1 second delay
    } catch (error) {
      console.error("Error fetching subscriber count:", error);
      setError("Error fetching subscriber count.");
    }
  };

  return (
    <div className="App">
      {!selectedChannel && (
        <div className="search-container">
          <h1>Live YouTube Subscribers</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a channel"
            className="search-input"
          />
          <button
            onClick={searchChannels}
            className="search-button"
            disabled={loading} // Disable button when loading
          >
            {"Search"} {/* Show loading text (we may use this later) {loading ? "Searching..." : "Search"} */}
          </button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      {loading && !selectedChannel && <p className="loading-message">Searching for channels...</p>} {/* Loading message */}
      {!selectedChannel && (
        <div className="channels-container">
          {channels.length > 0 ? (
            channels.map((channel) => (
              <div
                key={channel.channelId}
                className="channel-card"
                onClick={() => {
                  setSelectedChannel(channel);
                  getSubscriberCount(channel.channelId);
                }}
              >
                <img
                  src={channel.thumbnail}
                  alt={channel.title}
                  className="channel-thumbnail"
                />
                <h2 className="channel-title">{channel.title}</h2>
              </div>
            ))
          ) : (
            <p>No channels found</p>
          )}
        </div>
      )}
      {selectedChannel && (
        <div className="selected-channel">
          <img
            src={selectedChannel.thumbnail}
            alt={selectedChannel.title}
            className="channel-thumbnail-large"
          />
          <h2>{selectedChannel.title}</h2>
          {subscriberCount !== null ? (
            <p className="subscribers">{subscriberCount}</p>
          ) : (
            <p>Loading subscriber count...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
