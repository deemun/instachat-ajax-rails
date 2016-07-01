class MessageboardsController < ApplicationController
  
skip_before_action :verify_authenticity_token

  def index
  	@messageboards = Messageboard.all
  	render json: @messageboards
  end

  def show
  	@messageboard = Messageboard.find(params[:id]) #not plural since your pulling one
  	render json: @messageboard.to_json
  end

  # def new
  # 	@movie = Messageboard.new
  # end

  # def edit
  # 	@movie = Messageboard.find(param[:id])
  # end

   def create
        @messageboard = Messageboard.new(messageboard_params)

        if @messageboard.save
          render json: {}.to_json
        else
          render json: @messageboard.errors.to_json, status: 422
        end
   end


    def destroy
        @messageboard = Messageboard.find(params[:id])
        @messageboard.destroy
        head :no_content
        
    end
   


    private 
    def messageboard_params   #must define messageboards params in strong params method under private. 
    	params.require(:messageboard).permit(:title, :author, :text)
    end
end
