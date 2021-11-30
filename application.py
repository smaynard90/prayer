from flask import Flask, flash, jsonify, redirect, render_template, request, session, make_response
from osrsbox import items_api, prayers_api

#Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Loads items and prayers
items = items_api.load()
prayers = prayers_api.load()

# Stores prayer names and drain rates in a dictionary 
prayer_keys = []
prayer_values = []
for prayer in prayers:
    prayer_keys.append(prayer.name)
    prayer_values.append(prayer.drain_per_minute)

prayer_dict = {prayer_keys[i]: prayer_values[i] for i in range(len(prayer_keys))}

@app.route("/", methods=['GET'])
def index():
    return render_template("index.html")

@app.route("/items", methods=["POST"])
def get_items():
    
    # Receives and prints inputted text
    req = request.get_json() # pass the incoming request body and convert that JSON object into a python dictionary
    count = 0
    itemList = []
    
    for item in items:
        if item.equipable_by_player == True:
            if item.equipment.prayer != 0 and item.duplicate == False and item.equipment.slot == req['slot_type'].lower():
                if req['x'].lower() in item.name.lower(): # "req['x']" changes dynamically based on what is entered on the frontend per keypress
                    if item.name not in itemList:
                        itemList.append(item.name)
                        count += 1

        if count >= 25:
            break
    
    res = make_response(jsonify(itemList), 200) # creates a dictionary w/ a status code of 200
    return res

@app.route("/prayerBonus", methods=["POST"])
def get_prayer():

    body_item_name = None
    head_item_name = None
    neck_item_name = None
    ammo_item_name = None
    cape_item_name = None
    legs_item_name = None
    weapon_item_name = None
    shield_item_name = None
    twoh_item_name = None
    hands_item_name = None
    feet_item_name = None
    ring_item_name = None

    if "body_item_name" in request.get_json():
        body_item_name = request.get_json()['body_item_name']
    
    if "head_item_name" in request.get_json():
        head_item_name = request.get_json()['head_item_name']
        
    if "neck_item_name" in request.get_json():
        neck_item_name = request.get_json()['neck_item_name']
        
    if "ammo_item_name" in request.get_json():
        ammo_item_name = request.get_json()['ammo_item_name']

    if "cape_item_name" in request.get_json():
        cape_item_name = request.get_json()['cape_item_name']
        
    if "legs_item_name" in request.get_json():
        legs_item_name = request.get_json()['legs_item_name']

    if "weapon_item_name" in request.get_json():
        weapon_item_name = request.get_json()['weapon_item_name']
        
    if "shield_item_name" in request.get_json():
        shield_item_name = request.get_json()['shield_item_name']
        
    if "twoh_item_name" in request.get_json():
        twoh_item_name = request.get_json()['twoh_item_name']
        
    if "hands_item_name" in request.get_json():
        hands_item_name = request.get_json()['hands_item_name']
        
    if "feet_item_name" in request.get_json():
        feet_item_name = request.get_json()['feet_item_name']
        
    if "ring_item_name" in request.get_json():
        ring_item_name = request.get_json()['ring_item_name']
    
    if body_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "body" and item.duplicate == False:
                    if body_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if head_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "head" and item.duplicate == False:
                    if head_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if neck_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "neck" and item.duplicate == False:
                    if neck_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if ammo_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "ammo" and item.duplicate == False:
                    if ammo_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if cape_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "cape" and item.duplicate == False:
                    if cape_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if legs_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "legs" and item.duplicate == False:
                    if legs_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if weapon_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "weapon" and item.duplicate == False:
                    if weapon_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if shield_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "shield" and item.duplicate == False:
                    if shield_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if twoh_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "2h" and item.duplicate == False:
                    if twoh_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if hands_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "hands" and item.duplicate == False:
                    if hands_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if feet_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "feet" and item.duplicate == False:
                    if feet_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
                        
    if ring_item_name:
        for item in items:
            if item.equipable_by_player == True:
                if item.equipment.prayer != 0 and item.equipment.slot == "ring" and item.duplicate == False:
                    if ring_item_name.lower() in item.name.lower():
                        prayer_bonus = item.equipment.prayer
                        return jsonify({'prayer_bonus' : prayer_bonus})
    
    
    return jsonify({'error' : 'Missing data!'})
    
@app.route("/prayers", methods=["POST"])
def get_prayers():
    
    req = request.get_json()['activated_prayers']
    prayer_drain = 0
    new_prayer_dict = {k: prayer_dict[k] for k in req}
    
    for v in new_prayer_dict.values():
        prayer_drain += v
    
    return jsonify({'prayer_drain': prayer_drain})