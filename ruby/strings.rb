# ------------------------------------------------------
# TABLE OF CONTENTS
# ------------------------------------------------------
# 1 - GENERAL NOTES
# 2 - GENERAL GUIDE
# ------------------------------------------------------


# ------------------------------------------------------
# GENERAL NOTES
# ------------------------------------------------------


# ------------------------------------------------------
# GENERAL GUIDE
# ------------------------------------------------------

# Strings

# Interpolate variables
text = "ruby"
puts "i love #{text}";
puts "i love %s" % text;
printf("i love %s\n", text);

# Basic Strings Functions
text = 'i love ruby';
puts 'I LOVE RUBY'.downcase     # lowercase text
puts text.upcase                # uppercase text
puts text.capitalize            # capitalize text
puts text.size                  # string size
puts text.reverse               # reversing text
puts "ruby " * 3                # repeat text
puts "a"[0]                     # get ASCII value
puts 97.chr                     # get char from ASCII value
puts text.strip                 # both sides
puts text.lstrip                # just left side
puts text.rstrip                # just right side

# Removing characters
text = '{_{_ i love ruby _}_}'
puts text.trim('_{}')  # both sides
puts text.ltrim('_{') # just left side
puts text.rtrim('_}') # just right side

# Slicing strings
text = 'i love ruby';
puts text[0,6]
puts text[0,1]

# search characters
puts "ruby" =~ /y/  # find position

# Generating hashes with MD5 and SHA1
require 'digest/md5'
require 'digest/sha1'

puts Digest::MD5.hexdigest("ruby")
puts Digest::SHA1.hexdigest("ruby")
