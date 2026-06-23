# TASK-C: Industry Benchmark 残留修复

## 优先级: P1
## 说明: SOLO CODER之前的TASK-06（对比声明清理）有一处残留。

## 修改

**文件:** `graphene-fir/what-is-emissivity.html`

搜索:
```
The importance of emissivity as an industry benchmark is why XIHE became
```

替换为:
```
The importance of emissivity as a standardized metric is why XIHE became
```

## 验证
- [ ] grep -ri "industry benchmark" pages/ → 0 matches
- [ ] 不要部署
