module.exports = `  (gr_line (start <%= data.x %> <%= data.y %>) (end <%= data.x1 %> <%= data.y %>) (layer Edge.Cuts) (width 0.2))
  (gr_line (start <%= data.x1 %> <%= data.y %>) (end <%= data.x1 %> <%= data.y1 %>) (layer Edge.Cuts) (width 0.2))
  (gr_line (start <%= data.x1 %> <%= data.y1 %>) (end <%= data.x %> <%= data.y1 %>) (layer Edge.Cuts) (width 0.2))
  (gr_line (start <%= data.x %> <%= data.y1 %>) (end <%= data.x %> <%= data.y %>) (layer Edge.Cuts) (width 0.2))
  (gr_arc (start <%= data.x %> <%= data.y %>) (end <%= data.x %> <%= data.y %>) (angle -90) (layer Edge.Cuts) (width 0.2))
  (gr_arc (start <%= data.x1 %> <%= data.y %>) (end <%= data.x1 %> <%= data.y %>) (angle 90) (layer Edge.Cuts) (width 0.2))
  (gr_arc (start <%= data.x1 %> <%= data.y1 %>) (end <%= data.x1 %> <%= data.y1 %>) (angle -90) (layer Edge.Cuts) (width 0.2))
  (gr_arc (start <%= data.x %> <%= data.y1 %>) (end <%= data.x %> <%= data.y1 %>) (angle 90) (layer Edge.Cuts) (width 0.2))
`;
