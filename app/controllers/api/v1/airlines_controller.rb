module Api
  module V1
    class AirlinesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        airlines = Airline.all
        render json: AirlineSerializer.new(airlines, options).serialized_json
      end

      def show
        airline = Airline.find_by(slug: params[:slug])
        render json: serializer(airline, options)
      end

      def create
        airline = Airline.new(airline_params)

        if airline.save
          render json: AirlineSerializer.new(airline).serialized_json
        else
          render json: { error: airline.errors.messages }, stauts: 422
        end
      end

      def update
        airline = Airline.find_by(slug: params[:slug])

        if airline.update(airline_params)
          render json: AirlineSerializer.new(airline, options).serialized_json
        else
          render json: { error: airline.errors.messages }, stauts: 422
        end
      end

      def destroy
        airline = Airline.find_by(slug: params[:slug])

        if airline.destroy
          head :no_content
        else
          render json: { error: airline.errors.messages }, stauts: 422
        end
      end

      def options
        @options ||= { include: %i[reviews] }
      end

      private

      def airline_params
        params.require(:airline).permit(:name, :image_url)
      end

      def serializer(records, options = {})
        AirlineSerializer
          .new(records, options)
          .serialized_json
      end
    end
  end
end