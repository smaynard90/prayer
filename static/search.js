// "Modernizes" the script
"use strict";

// Searches item database based on user input
function search_item(x, slot_type) {
    
    document.getElementById("demo").innerHTML = x;
    
    let obj = {
      x: x,
      slot_type: slot_type
    };
    
    fetch(`${window.origin}/items`, {
      method: "POST",
      credentials: "include", 
      body: JSON.stringify(obj),
      cache: "no-cache",
      headers: new Headers({
        "content-type": "application/json"
      })
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status code: ${response.status}`);
          return;
        }
        response.json().then(function (data) {
          console.log(data);
          $("#items").empty();
          for (let item of data) {
            $("#items").append(`<option>${item}</option>`);
          }
        });
      })
      .catch(function (error) {
        console.log("Fetch error: " + error);
      });
}

// Submits item and retrieves its prayer bonus
$(document).ready(function() {
  
  // Head
  $('#button_head').on('click', function(event) {
    let obj = {
      head_item_name : $('#my_head_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#headErrorAlert').text(data.error).show();
        $('#headSuccessAlert').hide();
      }
      else {
        $('#headSuccessAlert').text(data.prayer_bonus).show();
        $('#headErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Body
  $('#button_body').on('click', function(event) {
    let obj = {
      body_item_name : $('#my_body_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#bodyErrorAlert').text(data.error).show();
        $('#bodySuccessAlert').hide();
      }
      else {
        $('#bodySuccessAlert').text(data.prayer_bonus).show();
        $('#bodyErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Neck
  $('#button_neck').on('click', function(event) {
    let obj = {
      neck_item_name : $('#my_neck_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#neckErrorAlert').text(data.error).show();
        $('#neckSuccessAlert').hide();
      }
      else {
        $('#neckSuccessAlert').text(data.prayer_bonus).show();
        $('#neckErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Ammo
  $('#button_ammo').on('click', function(event) {
    let obj = {
      ammo_item_name : $('#my_ammo_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#ammoErrorAlert').text(data.error).show();
        $('#ammoSuccessAlert').hide();
      }
      else {
        $('#ammoSuccessAlert').text(data.prayer_bonus).show();
        $('#ammoErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Cape
  $('#button_cape').on('click', function(event) {
    let obj = {
      cape_item_name : $('#my_cape_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#capeErrorAlert').text(data.error).show();
        $('#capeSuccessAlert').hide();
      }
      else {
        $('#capeSuccessAlert').text(data.prayer_bonus).show();
        $('#capeErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Legs
  $('#button_legs').on('click', function(event) {
    let obj = {
      legs_item_name : $('#my_legs_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#legsErrorAlert').text(data.error).show();
        $('#legsSuccessAlert').hide();
      }
      else {
        $('#legsSuccessAlert').text(data.prayer_bonus).show();
        $('#legsErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Legs
  $('#button_weapon').on('click', function(event) {
    let obj = {
      weapon_item_name : $('#my_weapon_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#weaponErrorAlert').text(data.error).show();
        $('#weaponSuccessAlert').hide();
      }
      else {
        $('#weaponSuccessAlert').text(data.prayer_bonus).show();
        $('#weaponErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Shield
  $('#button_shield').on('click', function(event) {
    let obj = {
      shield_item_name : $('#my_shield_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#shieldErrorAlert').text(data.error).show();
        $('#shieldSuccessAlert').hide();
      }
      else {
        $('#shieldSuccessAlert').text(data.prayer_bonus).show();
        $('#shieldErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // 2h
  $('#button_2h').on('click', function(event) {
    let obj = {
      twoh_item_name : $('#my_2h_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#2hErrorAlert').text(data.error).show();
        $('#2hSuccessAlert').hide();
      }
      else {
        $('#2hSuccessAlert').text(data.prayer_bonus).show();
        $('#2hErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Hands
  $('#button_hands').on('click', function(event) {
    let obj = {
      hands_item_name : $('#my_hands_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#handsErrorAlert').text(data.error).show();
        $('#handsSuccessAlert').hide();
      }
      else {
        $('#handsSuccessAlert').text(data.prayer_bonus).show();
        $('#handsErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Feet
  $('#button_feet').on('click', function(event) {
    let obj = {
      feet_item_name : $('#my_feet_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#feetErrorAlert').text(data.error).show();
        $('#feetSuccessAlert').hide();
      }
      else {
        $('#feetSuccessAlert').text(data.prayer_bonus).show();
        $('#feetErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
  
  // Ring
  $('#button_ring').on('click', function(event) {
    let obj = {
      ring_item_name : $('#my_ring_input').val()
    };
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayerBonus',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        $('#ringErrorAlert').text(data.error).show();
        $('#ringSuccessAlert').hide();
      }
      else {
        $('#ringSuccessAlert').text(data.prayer_bonus).show();
        $('#ringErrorAlert').hide();
      }
    });
    event.preventDefault();
  });
});

// Total Prayer Bonus
$(document).ready(function() {
  $('#button_total').on('click', function(event) {
    let prayer_total = 0;
    let prayer_head = parseInt(document.getElementById("headSuccessAlert").innerHTML, 10);
    let prayer_body = parseInt(document.getElementById("bodySuccessAlert").innerHTML, 10);
    let prayer_neck = parseInt(document.getElementById("neckSuccessAlert").innerHTML, 10);
    let prayer_ammo = parseInt(document.getElementById("ammoSuccessAlert").innerHTML, 10);
    let prayer_cape = parseInt(document.getElementById("capeSuccessAlert").innerHTML, 10);
    let prayer_legs = parseInt(document.getElementById("legsSuccessAlert").innerHTML, 10);
    let prayer_weapon = parseInt(document.getElementById("weaponSuccessAlert").innerHTML, 10);
    let prayer_shield = parseInt(document.getElementById("shieldSuccessAlert").innerHTML, 10);
    let prayer_2h = parseInt(document.getElementById("2hSuccessAlert").innerHTML, 10);
    let prayer_hands = parseInt(document.getElementById("handsSuccessAlert").innerHTML, 10);
    let prayer_feet = parseInt(document.getElementById("feetSuccessAlert").innerHTML, 10);
    let prayer_ring = parseInt(document.getElementById("ringSuccessAlert").innerHTML, 10);
    
    if (isNaN(prayer_head) == false) {
      prayer_total += prayer_head;
      // head_update = true;
      // head_update_value = prayer_head;
    }
    
    // else if ((isNaN(prayer_head) == true) && (head_update = true)) {
    //   prayer_total -= head_update_value;
    // }
    
    if (isNaN(prayer_body) == false) {
      prayer_total += prayer_body;
    }
    
    if (isNaN(prayer_neck) == false) {
      prayer_total += prayer_neck;
    }
    
    if (isNaN(prayer_ammo) == false) {
      prayer_total += prayer_ammo;
    }
    
    if (isNaN(prayer_cape) == false) {
      prayer_total += prayer_cape;
    }
    
    if (isNaN(prayer_legs) == false) {
      prayer_total += prayer_legs;
    }
    
    if (isNaN(prayer_weapon) == false) {
      prayer_total += prayer_weapon;
    }
    
    if (isNaN(prayer_shield) == false) {
      prayer_total += prayer_shield;
    }
    
    if (isNaN(prayer_2h) == false) {
      prayer_total += prayer_2h;
    }
    
    if (isNaN(prayer_hands) == false) {
      prayer_total += prayer_hands;
    }
    
    if (isNaN(prayer_feet) == false) {
      prayer_total += prayer_feet;
    }
    
    if (isNaN(prayer_ring) == false){
      prayer_total += prayer_ring;
    }
    
    $('#total_prayer').text(prayer_total).show();
    event.preventDefault();
  });
});

// Activated Prayers Drain Rate
$(document).ready(function() {
  $('#button_prayers').on('click', function(event) {
    let checks = document.getElementsByClassName('checks');
    let prayer_array = [];
    
    for (let i = 0; i < 29; i++) {
      if (checks[i].checked === true) {
        prayer_array.push(checks[i].value);
      }
    }
    
    let obj = {
      activated_prayers : prayer_array
    };
    
    $.ajax({
      data : JSON.stringify(obj),
      contentType: "application/json; charset=utf-8",
      type : 'POST',
      url : '/prayers',
      dataType: "json"
    })
    .done(function(data) {
      if (data.error) {
        // $('#bodyErrorAlert').text(data.error).show();
        // $('#bodySuccessAlert').hide();
        console.log("Prayer error!");
      }
      else {
        // $('#bodySuccessAlert').text(data.prayer_bonus).show();
        // $('#bodyErrorAlert').hide();
            $('#prayer_drain').text(data.prayer_drain).show();
      }
    });
    event.preventDefault();
  });
});


$(document).ready(function() {
  $('#button_final').on('click', function(event) {
    const base_drain_resistance = 60.0;
    let prayer_level = parseInt(document.getElementById("prayer level").value, 10);
    let prayer_bonus = parseInt(document.getElementById("total_prayer").innerHTML, 10);
    let prayer_drain_rate = parseInt(document.getElementById("prayer_drain").innerHTML, 10);
    let prayer_dose = Math.floor((prayer_level * 0.25) + 7);
    let effective_drain_resistance = (base_drain_resistance + (prayer_bonus * 2));
    let percentage = (100 * ((effective_drain_resistance / base_drain_resistance) - 1));
    let one_point = (effective_drain_resistance / prayer_drain_rate);
    let seconds_per_dose = (prayer_dose * one_point);
    let points_per_second = (1 / one_point);
    let point_duration = (one_point * prayer_level);
    
    $('#prayer_bonus_duration').text(percentage.toFixed(2) + "% longer").show();
    event.preventDefault();
    
    $('#points_per_dose').text(prayer_dose + " points").show();
    event.preventDefault();
    
    $('#seconds_per_dose').text(seconds_per_dose.toFixed(2) + " seconds").show();
    event.preventDefault();
    
    $('#one_point').text(one_point.toFixed(2) + " seconds").show();
    event.preventDefault();
    
    $('#points_per_second').text(points_per_second.toFixed(2) + " points per second").show();
    event.preventDefault();
    
    $('#point_duration').text(point_duration.toFixed(2) + " seconds").show();
    event.preventDefault();
  });
});
