### Default

<!--start-code-->

```jsx
const spanStyle = {
  width: '42px',
  height: '42px',
  borderRadius: '4px',
  background: '#eee',
  display: 'inline-block',
  verticalAlign: 'middle',
};

const badgeStyle = {
  marginRight: '20px'
};

render(
  <>
    <Badge count={5} style={badgeStyle}>
      <span style={spanStyle} />
    </Badge>
    <Badge count={0} showZero style={badgeStyle}>
      <span style={spanStyle} />
    </Badge>
    <Badge count={<Icon type="lock" style={{ color: '#f5222d' }} />}>
      <span style={spanStyle} />
    </Badge>
  </>
);
```

<!--end-code-->