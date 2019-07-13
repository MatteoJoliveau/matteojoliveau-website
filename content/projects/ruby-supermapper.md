+++
description = "SuperMapper is a quick and simple mapper between Ruby object.\nDefine a mapping between attribute readers and writers and automatically convert classes."
images = ["https://d1r70b9eh1brae.cloudfront.net/ruby-grey.png"]
language = "ruby"
repository = "https://github.com/matteojoliveau/super_mapper"
tags = ["open source", " library", "mapper"]
title = "Ruby SuperMapper"
website = ""
weight = 50

+++
# SuperMapper

**SuperMapper** is a quick and simple mapper between Ruby object.  
Define a mapping between attribute readers and writers and automatically convert classes.
    

## Installation

Add this line to your application's Gemfile:

{{< highlight ruby >}}
gem 'super_mapper'
{{< / highlight >}}

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install super_mapper

## Usage

### Defining mapping

Create a new Mapper instance, then start describing mapping to a specific class
{{< highlight ruby>}}
mapper = SuperMapper.new

# Define a mapping from a User to a UserStruct
mapper.define_mapping User, UserStruct  do |user, user_struct|
  user_struct.first_name = user.first_name
  
  # Apply transformations
  user_struct.username = user.username.downcase
  
  # Generate new values 
  user_struct.created_at = Time.now
end
{{< / highlight >}}

### Apply conversions

{{< highlight ruby>}}
user = User.first

# With target classes
user_struct = mapper.map user, UserStruct

# With existing target objects (target is modified in place)
mapper.map user, user_struct

# Multiple mappings can be applied to the same target. 
# Later ones override previously set value if conflicts occur.

some_other_user_representation = context[:current_user]
 
mapper.map user, user_struct
mapper.map some_other_user_representation, user_struct

# +user_struct+ now has fields from both User and the other representation
{{< / highlight >}}


If using target classes, they MUST implement a no-args constructor because new instances are created via `target_class.new`.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).