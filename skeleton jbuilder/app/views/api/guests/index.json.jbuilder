json.array! @guests do |guest|
    # json.name guest.name
    # json.age guest.age
    json.partial! "api/guests/guest" , guest: guest
end