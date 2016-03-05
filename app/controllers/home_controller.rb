class HomeController < ApplicationController
  def home
    @good_info = Good.all
    @cart = CartInfo.all
    @count = @cart.length
  end

  def save_info
    cart_goods = {name: params[:name],sort: params[:sort],unit: params[:unit],price: params[:price],count: params[:count] ,inventory: params[:inventory]}
    if CartInfo.find_by_name(params[:name]) == nil
      @cart_goods = CartInfo.new(cart_goods)
      @cart_goods.save
    else
      cart_goods = CartInfo.find_by_name(params[:name])
      count= cart_goods[:count].to_i + 1
      cart_goods.update(:count => count)
    end
    @good_cart = CartInfo.all
    @good_cart.each do |i|
      good_inventory = Good.find_by_name(i.name)
      inventory_count = good_inventory[:inventory]
      inventory_good = CartInfo.find_by_name(i.name)
      inventory_good.update(:inventory =>inventory_count)
    end
  end

  def update_count
    good = CartInfo.find_by_name(params[:name])
    good.update(:count => params[:count])
  end

  def update_inventory
    @cart = CartInfo.all
    @cart.each do |i|
      good_inventory = Good.find_by_name(i.name)
      inventory_count = good_inventory[:inventory]-i.count
      good_inventory.update(:inventory =>inventory_count)
      inventory_good = CartInfo.find_by_name(i.name)
      inventory_good.update(:inventory =>inventory_count)
    end
    redirect_to '/home/shopping_cart'
  end
  def shopping_cart
    @cart = CartInfo.all
    @count = @cart.length
    total_price = 0
    @cart.each do |i|
      total_price = total_price+ (i.count*i.price).to_f
    end
    @total_price ='%.1f' % total_price

  end

  def total_price
    @cart_info = CartInfo.all
    total_price = 0
    @cart_info.each do |i|
      total_price = total_price+ (i.count*i.price).to_f
    end
    @total_price ='%.2f' % total_price
  end
  def delete_cart
    @delete_info = CartInfo.find(params[:id])
    @delete_info.destroy
    redirect_to '/home/shopping_cart'
  end
  def search
    @good = Good.where("sort like ? " ,"%"+params[:text][:text]+"%") if (params[:text][:text])
    @good_name = Good.where("name like ?","%"+params[:text][:text]+"%") if (params[:text][:text])
    @cart = CartInfo.all
    @count = @cart.length
  end
end
