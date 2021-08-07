module.exports = `(module MX_Alps_Hybrid:MX-<%= data.key.size.w %>U-NoLED (layer F.Cu) (tedit 5A9F5203)
  (tstamp <%= data.key.id.toString(16) %>0)
  (at
  <%= data.x %>
  <%= data.y %>
  <%= data.rotation ? \` \${90-data.rotation}\` : \`\` %>)
  (path <%= data.kicadReference(data.key.id + "1") %>)
  (fp_text reference K_<%= data.key.id %> (at 0 3.175) (layer Dwgs.User)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value KEYSW (at 0 -7.9375) (layer Dwgs.User)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_line (start 5 -7) (end 7 -7) (layer Dwgs.User) (width 0.15))
  (fp_line (start 7 -7) (end 7 -5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 5 7) (end 7 7) (layer Dwgs.User) (width 0.15))
  (fp_line (start 7 7) (end 7 5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -7 5) (end -7 7) (layer Dwgs.User) (width 0.15))
  (fp_line (start -7 7) (end -5 7) (layer Dwgs.User) (width 0.15))
  (fp_line (start -5 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
  (fp_line (start -7 -7) (end -7 -5) (layer Dwgs.User) (width 0.15))
  (fp_line (start <%= -9.525*data.key.size.w %> -9.525) (end <%= 9.525*data.key.size.w %> -9.525) (layer Dwgs.User) (width 0.15))
  (fp_line (start <%= 9.525*data.key.size.w %> -9.525) (end <%= 9.525*data.key.size.w %> 9.525) (layer Dwgs.User) (width 0.15))
  (fp_line (start <%= 9.525*data.key.size.w %> 9.525) (end <%= -9.525*data.key.size.w %> 9.525) (layer Dwgs.User) (width 0.15))
  (fp_line (start <%= -9.525*data.key.size.w %> 9.525) (end <%= -9.525*data.key.size.w %> -9.525) (layer Dwgs.User) (width 0.15))
  (pad 1 thru_hole circle (at -2.5 -4) (size 2.25 2.25) (drill 1.47) (layers *.Cu B.Mask)
    <%- data.netForPad(1) %>)
  (pad 1 thru_hole oval (at -3.81 -2.54 48.0996) (size 4.211556 2.25) (drill 1.47 (offset 0.980778 0)) (layers *.Cu B.Mask)
    <%- data.netForPad(1) %>)
  (pad 2 thru_hole oval (at 2.5 -4.5 86.0548) (size 2.831378 2.25) (drill 1.47 (offset 0.290689 0)) (layers *.Cu B.Mask)
    <%- data.netForPad(2) %>)
  (pad 2 thru_hole circle (at 2.54 -5.08) (size 2.25 2.25) (drill 1.47) (layers *.Cu B.Mask)
    <%- data.netForPad(2) %>)
  (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at -5.08 0 48.0996) (size 1.75 1.75) (drill 1.75) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 5.08 0 48.0996) (size 1.75 1.75) (drill 1.75) (layers *.Cu *.Mask))
<% if (data.leds) { %>
  (pad 3 thru_hole circle (at -1.27 5.08) (size 1.905 1.905) (drill 1.04) (layers *.Cu B.Mask)
    <%- data.netForPad(3) %>)
  (pad 4 thru_hole rect (at 1.27 5.08) (size 1.905 1.905) (drill 1.04) (layers *.Cu B.Mask)
    <%- data.netForPad(4) %>)
  (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at -5.08 0 48.0996) (size 1.75 1.75) (drill 1.75) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 5.08 0 48.0996) (size 1.75 1.75) (drill 1.75) (layers *.Cu *.Mask))
<% } %>
  <% if (data.key.size.w >= 2 && data.key.size.w < 6) { %>  (pad "" np_thru_hole circle (at -11.938 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 11.938 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at -11.938 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 11.938 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))<% } %>
  <% if (data.key.size.w === 6.25) { %>  (pad "" np_thru_hole circle (at -49.9999 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 49.9999 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at -49.9999 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 49.9999 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))<% } %>
  <% if (data.key.size.w === 7) { %>  (pad "" np_thru_hole circle (at -57.15 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 57.15 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at -57.15 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
  (pad "" np_thru_hole circle (at 57.15 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))<% } %>
)
`;
