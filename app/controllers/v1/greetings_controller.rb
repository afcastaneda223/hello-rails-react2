class V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all

    render json: {

      greeting: @greeting[rand(@greeting.length)].messages
    }
  end
end
