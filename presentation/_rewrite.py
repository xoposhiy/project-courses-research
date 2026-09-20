import io
p = 'build_deck.js'
s = io.open(p, encoding='utf-8').read()
start = s.index('// ---------------------------------------------------------------- 9. Table')
end = s.index('// ---------------------------------------------------------------- Closing')
new = io.open('_practices.js', encoding='utf-8').read()
s = s[:start] + new + s[end:]
io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
print('ok')
