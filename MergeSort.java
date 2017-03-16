
    public static List<Integer> mergeSort(SortedSet<Integer> t1, SortedSet<Integer> t2){
        Iterator<Integer> it1 = t1.iterator();
        Iterator<Integer> it2 = t2.iterator();
        Integer i1 = null;
        Integer i2 = null;
        List<Integer> ret = new ArrayList<Integer>();
        while( (i1 != null || it1.hasNext()) &&
               (i2 != null || it2.hasNext() )){
            if(i1 == null)
                i1 = it1.next();
            if(i2 == null)
                i2 = it2.next();
            if(i1 == i2){
                ret.add(i1);
                i1 = i2 = null;
            }else if(i1 < i2){
                ret.add(i1);
                i1 = null;
            }else{
                ret.add(i2);
                i2 = null;
            }
        }
        while(i1 != null || it1.hasNext()){
            if(i1 == null)
                i1 = it1.next();
            ret.add(i1);
            i1 = null;
        }
        while(i2 != null || it2.hasNext()){
            if(i2 == null)
                i2 = it2.next();
            ret.add(i2);
            i2 = null;
        }

        return ret;
    }
