import fast_colorthief, sys

print("rgb("+",".join(map(str,fast_colorthief.get_dominant_color(sys.argv[1][5:], 5))),end=")")
