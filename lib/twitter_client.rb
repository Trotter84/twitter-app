class TwitterClient
  def self.timeline
    client.home_timeline
  end

  def self.tweet(message)
    client.update(message)
  end

  private
    def self.client
      Twitter::REST::Client.new do |config|
        config.consumer_key         = ENV['TWITTER_CONSUMER_KEY']
        config.consumer_secret      = ENV['TWITTER_CONSUMER_SECRET']
        config.access_token         = ENV['TWITTER_ACCESS_TOKEN']
        config.access_token_secret  = ENV['TWITTER_ACCESS_TOKEN_SECRET']
      end
    end
end
