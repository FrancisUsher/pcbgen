export default `(module MX_Only:MXOnly-<%= data.key.size.w %>U<% if (data.key.size.w == 6) {%>-Centered<%}%><% if (data.key.reversedStabs) {%>-ReversedStabilizers<%}%>-NoLED (layer F.Cu) (tedit 5A9F5203)
  (tstamp <%= data.key.id.toString(16) %>0)
  (at
  <%= data.x %>
  <%= data.y %>
  <%= data.rotation ? \` \${90-data.rotation}\` : \`\` %>)
  (path <%= data.kicadReference(data.key.id + "1") %>)
  (fp_text reference K<%= data.key.id %> (at 0 3.175) (layer Dwgs.User)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text user <%= data.key.matrixPos %> (at 0 5.175) (layer Dwgs.User)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value <%= data.key.size.w %>U (at 0 -7.9375) (layer Dwgs.User)
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
  (pad 1 thru_hole circle (at -3.81 -2.54) (size 2.25 2.25) (drill 1.47) (layers *.Cu B.Mask)
    <%- data.netForPad(1) %>)
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
<% if (data.key.size.w == 2) { %>  (pad "" np_thru_hole circle (at -11.938 <%if(data.key.reversedStabs){%><%}else{%>-<%}%>6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
(pad "" np_thru_hole circle (at 11.938 <%if(data.key.reversedStabs){%><%}else{%>-<%}%>6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
(pad "" np_thru_hole circle (at -11.938 <%if(data.key.reversedStabs){%>-<%}%>8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
(pad "" np_thru_hole circle (at 11.938 <%if(data.key.reversedStabs){%>-<%}%>8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))<% } %>
<% if (data.key.size.w > 2 && data.key.size.w < 9) { %>  (pad "" np_thru_hole circle (at -<%= (data.key.size.w - 1) * 19.05 / 2 %> <%if(data.key.reversedStabs){%><%}else{%>-<%}%>6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
(pad "" np_thru_hole circle (at <%= (data.key.size.w - 1) * 19.05 / 2 %> <%if(data.key.reversedStabs){%><%}else{%>-<%}%>6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
(pad "" np_thru_hole circle (at -<%= (data.key.size.w - 1) * 19.05 / 2 %> <%if(data.key.reversedStabs){%>-<%}%>8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
(pad "" np_thru_hole circle (at <%= (data.key.size.w - 1) * 19.05 / 2 %> <%if(data.key.reversedStabs){%>-<%}%>8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))<% } %>
)
`;
